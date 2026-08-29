package magefile

import (
	"crypto/rand"
	"encoding/base64"
	"fmt"
	"math/big"
)

func GenerateSecretKey() error {
	const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(-_=+)"
	keyBytes := make([]byte, 50)
	charsetLen := big.NewInt(int64(len(charset)))

	for i := range keyBytes {
		num, err := rand.Int(rand.Reader, charsetLen)
		if err != nil {
			return fmt.Errorf("failed to generate random character: %w", err)
		}
		keyBytes[i] = charset[num.Int64()]
	}

	randomToken := make([]byte, 32)
	if _, err := rand.Read(randomToken); err != nil {
		return fmt.Errorf("failed to generate random token: %w", err)
	}

	fmt.Println("=== Generated Secret Keys ===")
	fmt.Printf("Django Secret Key: %s\n", string(keyBytes))
	fmt.Printf("Generic App Secret / Hex: %x\n", randomToken)
	fmt.Printf("Generic App Secret / Base64: %s\n", base64.StdEncoding.EncodeToString(randomToken))
	return nil
}
