package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/template/html/v2"
	"github.com/server/db"
	api "github.com/server/router/Api"
	web "github.com/server/router/Web"
)

func main() {
	engine := html.New("./views", ".html")
	// create new app
	app := fiber.New(
		fiber.Config{
			Views: engine,
		})
	// connect databadse
	db.ConnectDb()
	// api route
	api.ServiceApi(app)
	//logger service
	app.Use(logger.New())

	// cors
	app.Use(cors.New())
	// web rouete
	web.SetupRoute(app)

	// default error page
	app.Use(func(c *fiber.Ctx) error {
		return c.Next()
	})
	app.Listen("127.0.0.1:8000")

}
