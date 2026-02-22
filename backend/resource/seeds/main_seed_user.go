package seeds

import (
	"log"

	"backend/resource/models"

	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

func UsersSeed(db *gorm.DB) {
	users := []models.User{
		{Name: "Super Admin", Email: "superadmin@example.com", PlatformRole: models.PlatformSuperAdmin, Password: "password123"},
		{Name: "Admin", Email: "admin@example.com", PlatformRole: models.PlatformAdmin, Password: "password123"},
		{Name: "User", Email: "user@example.com", PlatformRole: models.PlatformUser, Password: "password123"},
	}

	for _, u := range users {
		var existing models.User
		if err := db.Where("email = ?", u.Email).First(&existing).Error; err == nil {
			log.Println("User already exists:", u.Email)
			continue
		}

		hashed, _ := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)
		u.Password = string(hashed)

		if err := db.Create(&u).Error; err != nil {
			log.Println("Failed creating user:", u.Email, err)
		} else {
			log.Println("Created user:", u.Email, "with role", u.PlatformRole)
		}
	}
	log.Println("Seeding users done!")
}
