import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, empresa, tamano, tipoPlanta, procesos, tipoSolicitud, email, telefono, mensaje } = body;

    if (!nombre || !empresa || !email || !mensaje) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    const emailUser = process.env.GMAIL_USER || process.env.WORKSPACE_EMAIL;
    const emailPass = process.env.GMAIL_APP_PASS || process.env.WORKSPACE_APP_PASS;
    const destEmail = process.env.DEST_EMAIL || emailUser;

    if (!emailUser || !emailPass) {
      console.error("Faltan credenciales de correo: configure GMAIL_USER y GMAIL_APP_PASS en las variables de entorno.");
      return NextResponse.json(
        {
          ok: false,
          error: "Servicio de correo no configurado en el servidor. Configure GMAIL_USER y GMAIL_APP_PASS.",
        },
        { status: 500 }
      );
    }

    // Resolver lista de procesos (admite arreglo o texto plano)
    const resolvedProcesos: string[] = Array.isArray(procesos) && procesos.length > 0
      ? procesos
      : tipoPlanta
      ? tipoPlanta.split(",").map((s: string) => s.trim()).filter(Boolean)
      : [];

    const procesosHtml = resolvedProcesos.length > 0
      ? resolvedProcesos
          .map(
            (p: string) =>
              `<span style="display:inline-block; background:#e0f2fe; color:#0369a1; padding:3px 10px; border-radius:12px; margin:2px 4px 2px 0; font-size:12px; font-weight:600;">${p}</span>`
          )
          .join(" ")
      : '<span style="color:#94a3b8;">No especificado</span>';

    // Configuración optimizada para Gmail / Google Workspace
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass.replace(/\s+/g, ""), // Remueve espacios si se copió de Google "abcd efgh ijkl mnop"
      },
    });

    const isMVP = tipoSolicitud?.includes("MVP");
    const subjectPrefix = isMVP ? "🌟 POSTULACIÓN MVP PIONEROS" : "📩 Nuevo contacto";

    await transporter.sendMail({
      from: `"FlexOS Control Web" <${emailUser}>`,
      to: destEmail,
      replyTo: email,
      subject: `${subjectPrefix}: ${nombre} — ${empresa}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <body style="font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;">
          <div style="max-width:600px; margin:0 auto; background:white; border-radius:12px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08);">
            <div style="background:${isMVP ? "linear-gradient(135deg,#0284c7,#1e1b4b)" : "linear-gradient(135deg,#0ea5e9,#0284c7)"}; padding:28px 32px;">
              <h1 style="color:white; margin:0; font-size:22px;">
                ${isMVP ? "🌟 Postulación Programa MVP — Empresas Pioneras" : "Nuevo Contacto — FlexOS Control"}
              </h1>
              <p style="color:#bae6fd; margin:6px 0 0;">
                ${isMVP ? "Empresa interesada en probar FlexOS Suite V6 con acompañamiento" : "Formulario de solicitud de información"}
              </p>
            </div>
            <div style="padding:28px 32px;">
              <table style="width:100%; border-collapse:collapse;">
                <tr><td style="padding:10px 0; color:#64748b; font-size:13px; width:160px;">Interés Principal</td><td style="padding:10px 0; font-weight:bold; color:${isMVP ? "#0284c7" : "#0f172a"};">${tipoSolicitud || "General"}</td></tr>
                <tr style="background:#f8fafc;"><td style="padding:10px 8px; color:#64748b; font-size:13px;">Nombre</td><td style="padding:10px 8px; font-weight:bold; color:#0f172a;">${nombre}</td></tr>
                <tr><td style="padding:10px 0; color:#64748b; font-size:13px;">Empresa / Planta</td><td style="padding:10px 0; font-weight:bold; color:#0f172a;">${empresa}</td></tr>
                <tr style="background:#f8fafc;"><td style="padding:10px 8px; color:#64748b; font-size:13px; vertical-align:top;">Líneas / Procesos</td><td style="padding:10px 8px; color:#0f172a;">${procesosHtml}</td></tr>
                <tr><td style="padding:10px 0; color:#64748b; font-size:13px;">Tamaño de Planta</td><td style="padding:10px 0; color:#0f172a;">${tamano || "No especificado"}</td></tr>
                <tr style="background:#f8fafc;"><td style="padding:10px 8px; color:#64748b; font-size:13px;">Email</td><td style="padding:10px 8px;"><a href="mailto:${email}" style="color:#0ea5e9;">${email}</a></td></tr>
                <tr><td style="padding:10px 0; color:#64748b; font-size:13px;">Teléfono / WhatsApp</td><td style="padding:10px 0; color:#0f172a;">${telefono || "No proporcionado"}</td></tr>
              </table>
              <div style="margin-top:20px; padding:16px; background:#f0f9ff; border-left:4px solid #0ea5e9; border-radius:6px;">
                <p style="margin:0; color:#64748b; font-size:13px; margin-bottom:6px;">Detalles o Desafíos de la Planta</p>
                <p style="margin:0; color:#0f172a;">${mensaje.replace(/\n/g, "<br/>")}</p>
              </div>
            </div>
            <div style="padding:16px 32px; background:#f8fafc; text-align:center; font-size:12px; color:#94a3b8;">
              FlexOS Technologies SAS de CV — flexoscontrol.com
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Error enviando correo:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Error al enviar el correo. Verifique la contraseña de aplicación de Gmail.",
        details: process.env.NODE_ENV === "development" ? error?.message : undefined,
      },
      { status: 500 }
    );
  }
}
