function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result
    const prefix = "pet_";
    const dateLength = 4; 
   
    // strictly starts with "pet_"
    if (!input.startsWith(prefix)) {
        result = "Invalid Syntax";
    } else {
        // (4, 8) : extracts from index 4 - 7
        let petDateStr = input.substring(prefix.length, prefix.length + dateLength);
        // converts petDateStr's value into a number
        let petDateNum = Number(petDateStr);

        // checks if its a valid number, has 4 characters and if string ONLY had DIGITS
        if (isNaN(petDateNum) || petDateStr.length !== dateLength || !/^\d+$/.test(petDateStr)) {
            result = "Invalid Syntax";
        } else {
            // extracting the pet name AFTER date validation
            let petName = input.substring(prefix.length + dateLength);
        
            // pet name needs to be at least ONE character
            if (petName.length < 1) {
                result = "Invalid Syntax";
            } else {
                result = "Valid Syntax";
            }
        }
    }

    document.getElementById('result').innerText = result;
}


