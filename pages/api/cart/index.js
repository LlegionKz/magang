import supabaseAdmin from '../../../lib/supabaseServerClient'

async function getUserIdFromReq(req) {
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
  return req.query?.user_id || null
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' })

  const userId = await getUserIdFromReq(req)
  if (!userId) return res.status(401).json({ error: 'Unauthorized: missing user' })

  try {
    const { data, error } = await supabaseAdmin
      .from('cart_items')
      .select('id,course_id,qty,selected_meta,created_at')
      .eq('user_id', userId)

    if (error) throw error
    return res.status(200).json({ ok: true, cart: data })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('cart list error', err)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
