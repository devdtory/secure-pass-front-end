// Define the validate function
function validate(value: string, type: string): boolean {
    // Switch based on the type of data
    switch (type) {
        case 'email':
            // Validate email using a regular expression
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
        
        case 'password':
            // Validate password (example: at least 8 characters, including letters and numbers)
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
            return passwordRegex.test(value);
        
        case 'number':
            // Validate number (positive integer)
            const numberRegex = /^\d+$/;
            return numberRegex.test(value);
        
        case 'text':
            // Validate text (e.g., not empty)
            return value.trim() !== '';

        case 'website':
            // Validate website URL
            const websiteRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
            return websiteRegex.test(value);

        case 'cvv':
            // Validate CVV (3 or 4 digit number)
            const cvvRegex = /^\d{3,4}$/;
            return cvvRegex.test(value);

        case 'creditCard':
            // Validate credit card number (16 digits)
            const creditCardRegex = /^\d{16}$/;
            return creditCardRegex.test(value);

        case 'cryptoAddress':
            // Validate crypto account address (example: Ethereum address)
            const cryptoAddressRegex = /^0x[a-fA-F0-9]{40}$/;
            return cryptoAddressRegex.test(value);
        

        case 'cryptoParaphrase':
            // Validate crypto paraphrase (12 or 24 words)
            const cryptoParaphraseRegex = /^(\b\w+\b\s?){12,24}$/;
            return cryptoParaphraseRegex.test(value);

        default:
            // If type is not recognized, default to allowing any input
            return true;
    }
}

export default validate;

