

export async function POST(req, res) {
    const data = await req.json();
    const username = data["user"];
    const password = data["pw"];

    if (username == "test" && password == "test") {
        return Response.json({ message: "OK" }, { status: 200 })
    } else {
        return Response.json({ message: "Incorrect pw or username" }, { status: 401 })
    }


}