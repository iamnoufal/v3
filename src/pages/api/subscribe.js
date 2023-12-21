import admin from "@/utils/ghost-admin";

export default async function handler(req, res) {
  const body = JSON.parse(req.body)
  const resp = await admin.members.add({ email: body.email }, {send_email: true, email_type: "subscribe"})
    .then(data => res.status(200).json(data))
    .catch(err => res.status(401).json(err))
  res.status(200).json(resp);
}