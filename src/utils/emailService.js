import emailjs from "emailjs-com";

const sendEmail = async (formData) => {
  try {
    // Make sure these IDs/keys match your actual EmailJS settings
    const response = await emailjs.send(
      "service_rvex8nm", // Your Service ID
      "template_x4mnfz5", // Your Template ID
      {
        // These property names must match the placeholders in your EmailJS template
        // e.g. {{name}}, {{email}}, {{message}}
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "coICSF3SFV3xDIs7p" // Your Public Key
    );

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Try again later.",
    };
  }
};

export default sendEmail;
