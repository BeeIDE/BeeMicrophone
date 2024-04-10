({
    name: "Sound", // Category Name
    description: "Sound sensor",
    author: "BeeBlock",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/mic-ico.png", // Category icon
    color: "#0050a1", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "noise_sensor",
        {
            xml: `
                <block type="noise_threshold">
                    <value name="threshold">
                        <shadow type="math_number">
                            <field name="NUM">50</field>
                        </shadow>
                    </value>
                </block>
            `
        }
    ]
});