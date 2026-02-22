package main

import (
	"log"

	"backend/resource/database"
	"backend/resource/models"

	"github.com/joho/godotenv"
	"golang.org/x/crypto/bcrypt"
)

func users_seed() {
	if err := godotenv.Load(); err != nil {
		log.Println(".env not found, using system env")
	}

	// Connect database
	database.Connect()

	// Users to seed
	users := []models.User{
		{Name: "Super Admin", Email: "superadmin@example.com", PlatformRole: models.PlatformSuperAdmin, Password: "password123"},
	}

	for _, u := range users {
		// Hash password
		hashed, err := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)
		if err != nil {
			log.Fatal("Failed hashing password:", err)
		}
		u.Password = string(hashed)

		// Insert to DB
		if err := database.DB.Create(&u).Error; err != nil {
			log.Println("Failed creating user:", u.Email, err)
		} else {
			log.Println("Created user:", u.Email)
		}
	}

	log.Println("Seeding users done!")
}
