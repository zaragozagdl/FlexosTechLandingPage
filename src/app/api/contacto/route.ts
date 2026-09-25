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

    const resolvedSolicitud = tipoSolicitud || body.asunto || "Contacto General";
    const isMVP = resolvedSolicitud?.includes("MVP");
    const subjectPrefix = isMVP ? "🌟 POSTULACIÓN MVP PIONEROS" : "📩 Nuevo Contacto";

    await transporter.sendMail({
      from: `"FlexOS Technologies" <${emailUser}>`,
      to: destEmail,
      replyTo: email,
      subject: `[FlexOS Technologies] ${subjectPrefix}: ${nombre} — ${empresa}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <body style="font-family: 'Segoe UI', Arial, sans-serif; background:#080c14; padding:24px; color:#334155;">
          <div style="max-width:620px; margin:0 auto; background:#ffffff; border-radius:14px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.25); border:1px solid #e2e8f0;">
            <div style="background:linear-gradient(135deg, #04060a 0%, #0a1122 60%, #0284c7 100%); padding:32px 36px; border-bottom:3px solid #06b6d4;">
              <div style="font-size:11px; font-weight:700; color:#06b6d4; text-transform:uppercase; letter-spacing:1.5px; margin-bottom:6px;">
                FLEXOS TECHNOLOGIES • PORTAL CORPORATIVO
              </div>
              <h1 style="color:#ffffff; margin:0; font-size:22px; font-weight:700; line-height:1.3;">
                ${isMVP ? "🌟 Postulación Programa MVP — FlexOS Technologies" : "Nuevo Contacto — FlexOS Technologies"}
              </h1>
              <p style="color:#94a3b8; margin:8px 0 0; font-size:13px;">
                ${isMVP ? "Empresa interesada en el Programa MVP con acompañamiento técnico en planta" : "Solicitud de servicios de software, ingeniería a medida o demostración técnica"}
              </p>
            </div>
            
            <div style="padding:28px 36px;">
              <table style="width:100%; border-collapse:collapse; font-size:13px;">
                <tr>
                  <td style="padding:10px 0; color:#64748b; width:150px; font-weight:600;">Tipo de Solicitud</td>
                  <td style="padding:10px 0; font-weight:bold; color:#0284c7;">${resolvedSolicitud}</td>
                </tr>
                <tr style="background:#f8fafc;">
                  <td style="padding:10px 10px; color:#64748b; font-weight:600;">Nombre</td>
                  <td style="padding:10px 10px; font-weight:bold; color:#0f172a;">${nombre}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0; color:#64748b; font-weight:600;">Empresa / Planta</td>
                  <td style="padding:10px 0; font-weight:bold; color:#0f172a;">${empresa}</td>
                </tr>
                <tr style="background:#f8fafc;">
                  <td style="padding:10px 10px; color:#64748b; vertical-align:top; font-weight:600;">Líneas / Procesos</td>
                  <td style="padding:10px 10px; color:#0f172a;">${procesosHtml}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0; color:#64748b; font-weight:600;">Tamaño de Organización</td>
                  <td style="padding:10px 0; color:#0f172a;">${tamano || "No especificado"}</td>
                </tr>
                <tr style="background:#f8fafc;">
                  <td style="padding:10px 10px; color:#64748b; font-weight:600;">Email Corporativo</td>
                  <td style="padding:10px 10px;"><a href="mailto:${email}" style="color:#0284c7; font-weight:600; text-decoration:none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding:10px 0; color:#64748b; font-weight:600;">Teléfono / WhatsApp</td>
                  <td style="padding:10px 0; color:#0f172a; font-weight:bold;">${telefono || "No proporcionado"}</td>
                </tr>
              </table>

              <div style="margin-top:24px; padding:18px; background:#f0f9ff; border-left:4px solid #0284c7; border-radius:8px;">
                <p style="margin:0 0 6px; color:#0369a1; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.5px;">Requerimiento / Mensaje del Proyecto</p>
                <p style="margin:0; color:#0f172a; font-size:14px; line-height:1.6;">${mensaje.replace(/\n/g, "<br/>")}</p>
              </div>
            </div>

            <div style="padding:20px 36px; background:#f8fafc; border-top:1px solid #e2e8f0; text-align:center; font-size:12px; color:#64748b; line-height:1.6;">
              <strong style="color:#0f172a;">FlexOS Technologies SAS de CV</strong> — <a href="https://flexostechnologies.com" style="color:#0284c7; text-decoration:none;">flexostechnologies.com</a><br/>
              Guadalajara, Jalisco, México • Soluciones de Software Industrial, Apps Móviles & Hardware IoT
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
