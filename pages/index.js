[15:57:41.970] Running build in Washington, D.C., USA (East) – iad1
[15:57:41.970] Build machine configuration: 2 cores, 8 GB
[15:57:41.985] Cloning github.com/RedlineRecovery/redline-recovery-site (Branch: main, Commit: da20bf2)
[15:57:41.992] Skipping build cache, deployment was triggered without cache.
[15:57:42.225] Cloning completed: 239.000ms
[15:57:42.502] Running "vercel build"
[15:57:42.972] Vercel CLI 44.2.13
[15:57:43.271] Installing dependencies...
[15:57:58.487] 
[15:57:58.488] added 29 packages in 15s
[15:57:58.488] 
[15:57:58.489] 6 packages are looking for funding
[15:57:58.489]   run `npm fund` for details
[15:57:58.530] Detected Next.js version: 15.3.5
[15:57:58.535] Running "npm run build"
[15:57:58.642] 
[15:57:58.643] > redline-recovery@1.0.0 build
[15:57:58.643] > next build
[15:57:58.643] 
[15:57:59.225] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[15:57:59.227] This information is used to shape Next.js' roadmap and prioritize features.
[15:57:59.228] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[15:57:59.233] https://nextjs.org/telemetry
[15:57:59.234] 
[15:57:59.333]    ▲ Next.js 15.3.5
[15:57:59.333] 
[15:57:59.335]    Linting and checking validity of types ...
[15:57:59.465]    Creating an optimized production build ...
[15:58:00.929] Failed to compile.
[15:58:00.930] 
[15:58:00.930] ./pages/index.js
[15:58:00.930] Error:   [31mx[0m Unexpected token `{`. Expected identifier, string literal, numeric literal or [ for the computed key
[15:58:00.931]    ,-[[36;1;4m/vercel/path0/pages/index.js[0m:1:1]
[15:58:00.931]  [2m1[0m | style={{ backgroundImage: "url('/redline_recovery_hero_banner_3lines_centered.jpg')" }}
[15:58:00.931]    : [35;1m       ^[0m
[15:58:00.931]    `----
[15:58:00.934] 
[15:58:00.934] Caused by:
[15:58:00.934]     Syntax Error
[15:58:00.935] 
[15:58:00.935] Import trace for requested module:
[15:58:00.935] ./pages/index.js
[15:58:00.935] 
[15:58:00.955] 
[15:58:00.955] > Build failed because of webpack errors
[15:58:00.979] Error: Command "npm run build" exited with 1
[15:58:01.129] 
[15:58:04.070] Exiting build container
