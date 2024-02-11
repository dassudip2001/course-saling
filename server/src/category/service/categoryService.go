package service

import (
	"github.com/gofiber/fiber/v2"
	"github.com/server/db"
	"github.com/server/src/models"
	"gorm.io/gorm"
)

type CreateCategoryrequest struct {
	Name string `json:"name"`
	Code string `json:"code"`
}

type Category struct {
	// ID   string `json:"id"`
	Name string `json:"name"`
	Code string `json:"code"`

	CreatedAt string `json:"created_at"`
	UpdatedAt string `json:"updated_at"`
}

func createResponseCategory(creategoryModel models.Category) Category {
	return Category{
		Name: creategoryModel.Name,
		Code: creategoryModel.Code,
	}
}

// create category
func CreateCategory(c *fiber.Ctx) error {
	var request CreateCategoryrequest
	if err := c.BodyParser(&request); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request body"})
	}

	if request.Name == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"success": false,
			"message": "resources name is required",
		})
	}

	if request.Code == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"success": false,
			"message": "resources code is required",
		})
	}

	var existingResources models.Category

	if result := db.Database.Db.Where("name=?", request.Name, "code=?", request.Code).First(&existingResources); result.RowsAffected != 0 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"success": false,
			"message": "resources already exists",
		})
	}

	resources := models.Category{
		Model: gorm.Model{},
		Name:  request.Name,
		Code:  request.Code,
	}

	if err := db.Database.Db.Create(&resources).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"success": false,
			"message": "resources creation failed",
		})
	}

	responseResources := createResponseCategory(resources)
	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"success": true,
		"message": "resources created successfully",
		"data":    responseResources,
	})
}

// get all category
func GetAllCategory(c *fiber.Ctx) error {
	var categoryModel []models.Category

	if err := db.Database.Db.Find(&categoryModel).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Error fetching category",
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Success",
		"data":    categoryModel,
	})

}

// get category by id
func GetCategoryById(c *fiber.Ctx) error {
	id := c.Params("id")
	var resources models.Category

	if err := db.Database.Db.First(&resources, id).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
				"success": false,
				"message": "resources not found",
			})
		}
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"success": false,
			"message": "Failed to retrieve resources",
		})
	}
	return c.JSON(resources)

}

// update category
func UpdateCategory(c *fiber.Ctx) error {
	id := c.Params("id")
	var resources models.Category

	if err := db.Database.Db.First(&resources, id).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
				"error":   "resources not found",
				"success": false,
			})
		}
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   "Failed to retrieve resources",
			"success": false,
		})
	}

	if err := c.BodyParser(&resources); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error":   "Invalid request body",
			"success": false,
		})
	}

	if err := db.Database.Db.Save(&resources).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   "Failed to update resources",
			"success": false,
		})
	}
	return c.JSON(resources)

}

// delete category
func DeleteCategory(c *fiber.Ctx) error {
	id := c.Params("id")

	var resources models.Category

	if err := db.Database.Db.First(&resources, id).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
				"error":   "resources not found",
				"success": false,
			})
		}
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   "Failed to retrieve resources",
			"success": false,
		})
	}

	if err := db.Database.Db.Delete(&resources).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   "Failed to delete resources",
			"success": false,
		})
	}
	return c.SendStatus(fiber.StatusOK)

}
