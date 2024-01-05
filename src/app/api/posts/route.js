import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSessions } from "../auth/[...nextauth]/route";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");

  const category = searchParams.get("category");
  const type = searchParams.get("type");

  const POST_PER_PAGE = 3;

  const query = {
    take: POST_PER_PAGE,
    ...(!type && { skip: POST_PER_PAGE * (page - 1) }),
    include: { user: true },
    where: {
      ...(category && { catSlug: category }),
      ...(type && { views: { gt: 20 } }),
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// CREATE POST
export const POST = async (req) => {
  const session = await getAuthSessions();
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });
    return new NextResponse(JSON.stringify(post, { status: 201 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
