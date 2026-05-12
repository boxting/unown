const LOGO_URL =
  "https://cdn.jsdelivr.net/gh/boxting/unown@main/public/boxting-email-logo.png";

export const WEBSITE = "boxtinglabs.com";

function esc(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export interface SignatureData {
  name: string;
  role: string;
  phone: string;
  phoneRaw: string;
  email: string;
  location: string;
}

export interface SignatureLabels {
  phone: string;
  email: string;
  location: string;
  web: string;
}

export function buildSignatureHTML(data: SignatureData, labels: SignatureLabels): string {
  const { name, role, phone, phoneRaw, email, location } = data;

  const displayName = name || "Your Name";
  const displayEmail = email || "you@boxtinglabs.com";

  const roleRow = role
    ? `<div style="font-size:13px;color:rgb(120,120,120);margin-bottom:6px;">${esc(role)}</div>`
    : "";

  const phoneRow = phone
    ? `<div><span style="color:rgb(85,85,85)"><b style="display:inline-block;min-width:68px;">${esc(labels.phone)}</b></span><a href="https://wa.me/${esc(phoneRaw.replace(/\s/g, ""))}" style="color:rgb(85,85,85);text-decoration:underline;" target="_blank">${esc(phone)}</a></div>`
    : "";

  const locationRow = location
    ? `<div><span style="color:rgb(85,85,85)"><b style="display:inline-block;min-width:68px;">${esc(labels.location)}</b></span><span>${esc(location)}</span></div>`
    : "";

  const webRow = `<div><span style="color:rgb(85,85,85)"><b style="display:inline-block;min-width:68px;">${esc(labels.web)}</b></span><a href="https://${WEBSITE}" target="_blank" style="color:rgb(85,85,85);text-decoration:underline;">${esc(WEBSITE)}</a></div>`;

  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:rgb(34,34,34);line-height:1.4;max-width:520px;">
  <tbody>
    <tr>
      <td valign="middle" style="padding-right:16px;vertical-align:middle;">
        <img src="${LOGO_URL}" alt="Boxting Labs" style="display:block;border:0;" width="120" height="auto">
      </td>
      <td valign="middle" style="padding-left:8px;border-left:1px solid rgb(229,229,229);vertical-align:middle;">
        <div style="font-size:16px;font-weight:700;color:rgb(17,17,17);">${esc(displayName)}</div>
        ${roleRow}
        <div style="height:6px;line-height:6px;font-size:0;">&nbsp;</div>
        ${phoneRow}
        <div><span style="color:rgb(85,85,85)"><b style="display:inline-block;min-width:68px;">${esc(labels.email)}</b></span><a href="mailto:${esc(displayEmail)}" style="color:rgb(85,85,85);text-decoration:underline;" target="_blank">${esc(displayEmail)}</a></div>
        ${locationRow}
        ${webRow}
        <div style="height:10px;line-height:10px;font-size:0;">&nbsp;</div>
        <div style="font-size:11px;color:rgb(119,119,119);">Boxting Labs</div>
      </td>
    </tr>
  </tbody>
</table>`;
}
