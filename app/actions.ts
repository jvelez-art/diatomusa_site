"use server";

import { sql } from "@vercel/postgres";
import { Resend } from "resend";

// TODO: User needs to provide this env var
const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAIL = "jvelez@diatomusa.com";

// Ensure table exists (lazy init for simplicity, in prod use migrations)
async function ensureTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        privacy_accepted BOOLEAN NOT NULL DEFAULT FALSE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
  } catch (e) {
    console.error("Error creating table:", e);
  }
}

export async function subscribeAction(formData: FormData) {
  const email = formData.get("email") as string;
  const privacy = formData.get("privacy");

  if (!email || !privacy) {
    return { success: false, message: "Por favor, completa todos los campos." };
  }

  try {
    // 1. Save to Database
    await ensureTable();
    try {
      await sql`
        INSERT INTO waitlist (email, privacy_accepted)
        VALUES (${email}, ${privacy === "on"})
        ON CONFLICT (email) DO NOTHING;
      `;
    } catch (dbError) {
      console.error("DB Error:", dbError);
      // Continue even if DB fails, to verify email logic (or return error)
    }

    // 2. Send Email Notification to Owner
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "Diatomusa Website <onboarding@resend.dev>", // Default Resend testing domain
        to: OWNER_EMAIL,
        subject: "🚀 Nueva persona en la Lista de Espera",
        html: `<p>Un nuevo usuario se ha unido:</p><p><strong>Email:</strong> ${email}</p>`,
      });
    }

    return { success: true, message: "¡Gracias! Te avisaremos pronto." };
  } catch (error) {
    console.error("Subscription error:", error);
    return { success: false, message: "Hubo un error al procesar tu solicitud." };
  }
}

export async function sendContactEmail(formData: FormData) {
  const founderEmail = formData.get("founderEmail");
  const founderName = formData.get("founderName");
  const userEmail = formData.get("userEmail") as string;
  const userName = formData.get("userName") as string;
  const message = formData.get("message") as string;

  if (!userEmail || !message || !userName) {
    return { success: false, message: "Por favor, completa todos los campos." };
  }

  try {
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "Diatomusa Website <onboarding@resend.dev>",
        to: OWNER_EMAIL,
        replyTo: userEmail,
        subject: `📩 Nuevo mensaje de ${userName}`,
        html: `
          <h3>Nuevo mensaje de contacto</h3>
          <p><strong>Nombre:</strong> ${userName}</p>
          <p><strong>Email:</strong> ${userEmail}</p>
          <p><strong>Mensaje:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 10px; border-left: 3px solid #ccc;">
            ${message}
          </blockquote>
        `,
      });
    } else {
        console.log("RESEND_API_KEY missing, logging to console:", { userEmail, message });
    }

    return { success: true, message: "Mensaje enviado correctamente." };
  } catch (error) {
    console.error("Contact email error:", error);
    return { success: false, message: "Error al enviar el mensaje." };
  }
}
