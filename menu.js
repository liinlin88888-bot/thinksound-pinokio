module.exports = {
  title: "ThinkSound",
  description: "Any2Audio 生成与编辑（Pinokio 一键安装/启动）",
  icon: "icon.png",
  menu: async (kernel, info) => {
    const installing = info.running("install.json");
    const installed = info.exists("app/conda");

    if (installing) return [{ icon: "fa-solid fa-plug", text: "Installing...", href: "install.json" }];
    if (!installed) return [{ icon: "fa-solid fa-plug", text: "Install", href: "install.json" }];

    const running = info.running("start.json");
    const memory = info.local("start.json");

    if (running && memory && memory.url) {
      return [
        { icon: "fa-solid fa-rocket", text: "Web UI", href: memory.url },
        { icon: "fa-solid fa-terminal", text: "Terminal", href: "start.json" },
        { icon: "fa-solid fa-rotate", text: "Update", href: "update.json" },
        { icon: "fa-solid fa-broom", text: "Reset", href: "reset.json" }
      ];
    }

    return [
      { icon: "fa-solid fa-power-off", text: "Start", href: "start.json" },
      { icon: "fa-solid fa-rotate", text: "Update", href: "update.json" },
      { icon: "fa-solid fa-broom", text: "Reset", href: "reset.json" }
    ];
  }
}