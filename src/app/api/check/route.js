import { NextResponse } from 'next/server';

export async function GET(request) {
  const targetUrl = request.nextUrl.searchParams.get('url');
  const siteParam = request.nextUrl.searchParams.get('site');

  try {
    const response = await fetch(targetUrl);

    // Crea un nuevo objeto con las propiedades deseadas del response
    const responseData = {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      redirected: response.redirected,
      type: response.type,
      url: response.url,
    };

    // Decodifica y parsea el objeto 'site'
    const site = siteParam ? JSON.parse(decodeURIComponent(siteParam)) : null;

    // Retorna ambos objetos en la respuesta
    return NextResponse.json({
      responseData: responseData,  // Información de la respuesta fetch
      site: site,                // Objeto 'site' recibido
    });

  } catch (error) {
    return NextResponse.json({ error: 'Error al acceder al sitio web' }, { status: 500 });
  }
}