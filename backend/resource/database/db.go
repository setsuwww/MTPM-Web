package database

import (
	"log"
	"os"

	"backend/resource/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() *gorm.DB {
	dsn := os.Getenv("DATABASE_URL")

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect:", err)
	}

	DB = db

	runMigrations()

	log.Println("Database connected and migrated")
	return db
}
func runMigrations() {
	err := DB.AutoMigrate(
		&models.User{},
		&models.Client{},
		&models.Project{},
		&models.Sprint{},
		&models.Task{},
		&models.Milestone{},
		&models.ChangeRequest{},
		&models.Expense{},
		&models.TimeLog{},
	)

	if err != nil {
		log.Fatal("Migration failed:", err)
	}
}
