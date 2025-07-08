[15:08:57.145] Running build in Washington, D.C., USA (East) – iad1
[15:08:57.154] Build machine configuration: 2 cores, 8 GB
[15:08:57.180] Cloning github.com/RedlineRecovery/redline-recovery-site (Branch: main, Commit: da20bf2)
[15:08:57.193] Skipping build cache, deployment was triggered without cache.
[15:08:57.438] Cloning completed: 258.000ms
[15:08:57.842] Running "vercel build"
[15:08:58.279] Vercel CLI 44.2.13
[15:08:58.590] Installing dependencies...
[15:09:11.843] 
[15:09:11.843] added 29 packages in 13s
[15:09:11.844] 
[15:09:11.844] 6 packages are looking for funding
[15:09:11.844]   run `npm fund` for details
[15:09:11.881] Detected Next.js version: 15.3.5
[15:09:11.885] Running "npm run build"
[15:09:11.998] 
[15:09:11.998] > redline-recovery@1.0.0 build
[15:09:11.999] > next build
[15:09:11.999] 
[15:09:12.594] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[15:09:12.596] This information is used to shape Next.js' roadmap and prioritize features.
[15:09:12.596] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[15:09:12.596] https://nextjs.org/telemetry
[15:09:12.597] 
[15:09:12.691]    ▲ Next.js 15.3.5
[15:09:12.692] 
[15:09:12.694]    Linting and checking validity of types ...
[15:09:12.834]    Creating an optimized production build ...
[15:09:14.316] Failed to compile.
[15:09:14.316] 
[15:09:14.318] ./pages/index.js
[15:09:14.318] Error:   [31mx[0m Unexpected token `{`. Expected identifier, string literal, numeric literal or [ for the computed key
[15:09:14.318]    ,-[[36;1;4m/vercel/path0/pages/index.js[0m:1:1]
[15:09:14.319]  [2m1[0m | style={{ backgroundImage: "url('/redline_recovery_hero_banner_3lines_centered.jpg')" }}
[15:09:14.319]    : [35;1m       ^[0m
[15:09:14.319]    `----
[15:09:14.321] 
[15:09:14.322] Caused by:
[15:09:14.322]     Syntax Error
[15:09:14.322] 
[15:09:14.323] Import trace for requested module:
[15:09:14.323] ./pages/index.js
[15:09:14.324] 
[15:09:14.341] 
[15:09:14.342] > Build failed because of webpack errors
[15:09:14.365] Error: Command "npm run build" exited with 1
[15:09:14.515] 
[15:09:17.516] Exiting build container
fixed build syntax error
