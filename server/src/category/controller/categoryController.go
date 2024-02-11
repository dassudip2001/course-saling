package controller

import (
	"github.com/gofiber/fiber/v2"
	"github.com/server/src/category/service"
)

func AllCategory(c *fiber.Ctx) error {
	return service.GetAllCategory(c)
}

// create
func CreateCategory(c *fiber.Ctx) error {
	return service.CreateCategory(c)
}

// find by id
func GetCategoryById(c *fiber.Ctx) error {
	return service.GetCategoryById(c)
}

// update
func UpdateCategory(c *fiber.Ctx) error {
	return service.UpdateCategory(c)
}

// delete
func DeleteCategory(c *fiber.Ctx) error {
	return service.DeleteCategory(c)
}

// https://medium.com/@adhtanjung/how-to-build-rest-api-using-go-fiber-gorm-orm-and-postgresql-a454848672a0
