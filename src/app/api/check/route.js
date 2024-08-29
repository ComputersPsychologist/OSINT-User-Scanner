import { NextResponse } from 'next/server'

export async function GET(request) {
  const targetUrl = request.nextUrl.searchParams.get('url')
  const siteParam = request.nextUrl.searchParams.get('site')

  try {
    const response = await fetch(targetUrl)

    
    const responseData = {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      redirected: response.redirected,
      type: response.type,
      url: response.url,
    }

    // Parse 'site' object
    const site = siteParam ? JSON.parse(decodeURIComponent(siteParam)) : null

  
    return NextResponse.json({ responseData, site })

  } catch (error) {
    return NextResponse.json({ error: 'Error al acceder al sitio web' }, { status: 500 })
  }
}