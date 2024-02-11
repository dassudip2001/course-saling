package gateway

import (
	"github.com/gofiber/fiber/v2"
	"github.com/server/src/category/controller"
)

// category route
func CategoryGateway(app *fiber.App) {

	// category route
	app.Get("/api/v1/category", controller.AllCategory)
	app.Post("/api/v1/category", controller.CreateCategory)
	app.Get("/api/v1/category/:id", controller.GetCategoryById)
	app.Put("/api/v1/category/:id", controller.UpdateCategory)
	app.Delete("/api/v1/category/:id", controller.DeleteCategory)
}
