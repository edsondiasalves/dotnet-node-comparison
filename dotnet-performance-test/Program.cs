var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World dotnet!");

app.MapGet("/readfile", async () =>
{
    var fileContent = await File.ReadAllTextAsync("data.txt");
    return fileContent;
});

app.MapGet("/fibonacci", () =>
{
    ulong a = 0, b = 1, c = 0;
    for (ulong i = 2; i < 2000000; i++)
    {
        c = a + b;
        a = b;
        b = c;
    }

    return "done";
});

app.Run();