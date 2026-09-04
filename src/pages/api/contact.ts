import type { APIRoute } from "astro";
import { Resend } from "resend";
import { profile } from "@data/site";

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_body" }, 400);
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.company ?? "").trim();

  // Honeypot: si un bot llena este campo oculto, respondemos "ok" sin enviar nada.
  if (honeypot) {
    return json({ ok: true }, 200);
  }

  if (!name || !email || !message) {
    return json({ ok: false, error: "missing_fields" }, 400);
  }
  if (!EMAIL_RE.test(email)) {
    return json({ ok: false, error: "invalid_email" }, 400);
  }
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return json({ ok: false, error: "too_long" }, 400);
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY no está configurada");
    return json({ ok: false, error: "server_misconfigured" }, 500);
  }

  const fromEmail = import.meta.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: profile.email,
      replyTo: email,
      subject: `Nuevo mensaje de contacto: ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return json({ ok: false, error: "send_failed" }, 502);
    }

    return json({ ok: true }, 200);
  } catch (err) {
    console.error("Contact endpoint error:", err);
    return json({ ok: false, error: "send_failed" }, 502);
  }
};

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
