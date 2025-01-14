

window.addEventListener("gamepadconnected", (event) => {
    const gamepad = event.gamepad;
    document.getElementById("gamepad-status").textContent = `Connected: ${gamepad.id}`;
});

window.addEventListener("gamepaddisconnected", () => {
    document.getElementById("gamepad-status").textContent = "No gamepad detected";
});