

window.addEventListener("gamepadconnected", (event) => {
    const gamepad = event.gamepad;
    document.getElementById("gamepad-status").textContent = `Connected: ${gamepad.id}`;
});

window.addEventListener("gamepaddisconnected", () => {
    document.getElementById("gamepad-status").textContent = "No gamepad detected";
});

// Fetch controller data from the API
fetch('/api/controllers')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('controller-details');
    data.forEach(controller => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${controller.model}</h3>
        <p>Vendor: ${controller.vendor}</p>
        <p>Product: ${controller.product}</p>
        <p>Features: ${controller.features.join(', ')}</p>
      `;
      container.appendChild(div);
    });
  });
  
// check Controller Status
  async function checkControllerStatus() {
    try {
        const response = await fetch('/controller-status');
        const data = await response.json();
        if (data.connected) {
            document.getElementById('status').textContent = `Controller Connected: ${data.id}`;
        } else {
            document.getElementById('status').textContent = 'No Controller Connected';
        }
    } catch (error) {
        console.error('Error fetching controller status:', error);
    }
}

setInterval(checkControllerStatus, 1000);
