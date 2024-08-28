import { NextResponse } from 'next/server';

export async function GET(request) {
  const targetUrl = request.nextUrl.searchParams.get('url');

  try {
    const response = await fetch(targetUrl);
    const responseText = await response.text(); // Obtener la respuesta como texto
    return NextResponse.json({ response: responseText, status: response.status });
  } catch (error) {
    return NextResponse.json({ error: 'Error al acceder al sitio web' }, { status: 500 });
  }
}