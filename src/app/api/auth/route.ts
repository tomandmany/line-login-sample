// import { auth } from '@/auth';
// import { NextApiRequest, NextApiResponse } from 'next';
// import { NextResponse } from 'next/server';

// export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
//   const session = await auth();
//   console.log(session);

//   if (session) {
//     return NextResponse.json({ data: 'Protected data' });
//   }
//   return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
// };