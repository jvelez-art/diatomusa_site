"use server";

export async function subscribeAction(formData: FormData) {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const email = formData.get("email");
  const privacy = formData.get("privacy");

  if (!email || !privacy) {
    return { success: false, message: "Por favor, completa todos los campos." };
  }

  // TODO: Integrate Resend API here
  console.log("New Lead:", email);

  return { success: true, message: "¡Gracias! Te avisaremos pronto." };
}

export async function sendContactEmail(formData: FormData) {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const founderEmail = formData.get("founderEmail");
  const founderName = formData.get("founderName");
  const userEmail = formData.get("userEmail");
  const userName = formData.get("userName");
  const message = formData.get("message");

  if (!userEmail || !message || !userName) {
    return { success: false, message: "Por favor, completa todos los campos." };
  }

  // TODO: Integrate Resend API here
  console.log(`New Message for ${founderName} (${founderEmail}) from ${userName} (${userEmail}): ${message}`);

  return { success: true, message: "Mensaje enviado correctamente." };
}
