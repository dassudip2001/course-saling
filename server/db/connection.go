package db

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/server/src/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type DbInstance struct {
	Db *gorm.DB
}

var Database DbInstance

func ConnectDb() {
	godotenv.Load()
	// Get the database credentials from environment variables
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbName := os.Getenv("DB_NAME")

	connection := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", dbUser, dbPassword, dbHost, dbPort, dbName)
	db, err := gorm.Open(mysql.Open(connection), &gorm.Config{})

	if err != nil {
		log.Fatal("Error connecting to database: ", err)
	} else {
		log.Println("Database connection successfully opened")
	}

	log.Println("Database connection successfully opened")
	db.Logger = logger.Default.LogMode(logger.Info)
	log.Println("Run The Migrations")
	// add migrations here

	// db.AutoMigrate(&models.Category{}, &models.Product{}, &models.Location{}, &models.MettingRoom{}, &models.Resource{}, &models.Booking{})
	// db.AutoMigrate(&models.Resource{}, &models.Catering{})

	db.AutoMigrate(&models.Category{})
	// db.AutoMigrate(&models.Resource{})
	// db.Migrator().DropTable(&models.Category{})

	Database = DbInstance{Db: db}
}
