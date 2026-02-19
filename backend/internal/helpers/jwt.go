package helpers

import (
	"backend/internal/models"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

var JWT_SECRET = []byte("supersecret") // bisa ambil dari env

func GenerateToken(user models.User) (string, error) {
	claims := jwt.MapClaims{
		"user_id": user.ID,
		"role":    user.Role,
		"exp":     time.Now().Add(time.Hour * 72).Unix(),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(JWT_SECRET)
}
