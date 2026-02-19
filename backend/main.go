package main

import (
	"log"

	"github.com/joho/godotenv"

	"backend/internal/database"
	"backend/internal/models"
)

func main() {
	godotenv.Load()

	database.Connect()

	err := database.DB.AutoMigrate(&models.User{})
	if err != nil {
		log.Fatal("Migration failed:", err)
	}

	log.Println("App started")
}
