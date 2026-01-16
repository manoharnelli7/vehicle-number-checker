function checkVehicle() {
    const number = document.getElementById("vehicleNumber").value.toUpperCase();
    const result = document.getElementById("result");

    // Indian vehicle number regex
    const privateRegex = /^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{4}$/;
    const bhRegex = /^[0-9]{2}BH[0-9]{4}[A-Z]{2}$/;

    const states = {
        KA: "Karnataka",
        MH: "Maharashtra",
        DL: "Delhi",
        TN: "Tamil Nadu",
        UP: "Uttar Pradesh",
        TS: "Telangana",
        KL: "Kerala",
        AP: "Andhra Pradesh",
        GJ: "Gujarat",
        RJ: "Rajasthan"
    };

    if (privateRegex.test(number)) {
        const stateCode = number.substring(0, 2);
        const stateName = states[stateCode] || "Unknown State";

        result.style.color = "green";
        result.innerHTML = `
            ✔ Valid Indian Vehicle Number <br>
            🚩 State: ${stateName}
        `;
    }
    else if (bhRegex.test(number)) {
        result.style.color = "green";
        result.innerHTML = `
            ✔ Valid BH Series Vehicle Number <br>
            🚘 Bharat Series Vehicle
        `;
    }
    else {
        result.style.color = "red";
        result.innerHTML = "❌ Invalid Vehicle Number Format";
    }
}
