package api

import (
	"github.com/gofiber/fiber/v2"
	"github.com/server/src/category/gateway"
)

func ServiceApi(c *fiber.App) {

	gateway.CategoryGateway(c)
}
