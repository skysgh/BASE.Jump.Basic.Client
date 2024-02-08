const PROXY_CONFIG = [
  {
    context: [

      "/debug/**",
      "/$odata/**",
      "/swagger/**",
      "/api/**",
      "/docs/**",
      "/sysinfo/**",
      "/openAPI/**"

    ],
    target: "https://localhost:8201",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
