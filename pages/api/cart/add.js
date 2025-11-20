import supabaseAdmin from '../../../lib/supabaseServerClient'

async function getUserIdFromReq(req) {
  // Prefer Authorization header: 'Bearer <access_token>'
  const auth = req.headers.authorization || ''
  if (auth.startsWith('Bearer ')) {
    const token = auth.split(' ')[1]
    try {
      const { data, error } = await supabaseAdmin.auth.getUser(token)
      if (error) return null
      return data.user?.id ?? null
    } catch (e) {
      return null
    }
  }
  // Fallback: allow body.user_id for transitional support (NOT recommended for production)
  return req.body?.user_id || null
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' })

  const userId = await getUserIdFromReq(req)
  if (!userId) return res.status(401).json({ error: 'Unauthorized: missing user' })

  const { course_id, qty = 1, selected_meta = {} } = req.body
  if (!course_id) return res.status(400).json({ error: 'course_id is required' })
  const qtyNum = parseInt(qty, 10)
  if (isNaN(qtyNum) || qtyNum < 1) return res.status(400).json({ error: 'qty must be >= 1' })

  try {
    // Upsert cart item for the user (unique per user+course)
    const { data, error } = await supabaseAdmin
      .from('cart_items')
      .upsert({ user_id: userId, course_id, qty: qtyNum, selected_meta }, { onConflict: ['user_id', 'course_id'] })
      .select()

    if (error) throw error
    return res.status(200).json({ ok: true, item: data?.[0] ?? null })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('cart add error', err)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
