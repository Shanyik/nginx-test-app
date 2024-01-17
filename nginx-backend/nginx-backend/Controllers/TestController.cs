using Microsoft.AspNetCore.Mvc;

namespace nginx_backend.Controllers;

[ApiController]
[Route("api/[controller]")]

public class TestController : ControllerBase
{
    [HttpGet("test")]
    public async Task<IActionResult> TestConnection()
    {
        return Ok("Connection is successful");
    }
}