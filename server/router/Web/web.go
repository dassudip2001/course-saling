package web

import "github.com/gofiber/fiber/v2"

func welcome(c *fiber.Ctx) error {
	return c.Render("index", fiber.Map{"title": "Server is running"})
}

func SetupRoute(app *fiber.App) {
	app.Get("/", welcome)

}
