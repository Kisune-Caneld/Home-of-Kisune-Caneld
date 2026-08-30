Hãy redesign toàn bộ WebGL rain background hiện tại. Rain hiện tại nhìn quá giả vì chỉ gồm khoảng 180 streak hình học với velocity gần như cố định, không có depth, turbulence, fog, atmospheric layering hay interaction với môi trường.

Mục tiêu là tạo một rainy blue-nostalgia atmosphere cho personal Notion-inspired homepage, không phải một rain particle demo đơn giản.

Yêu cầu kiến trúc:

1. DEPTH LAYERS

* Chia rain thành foreground / midground / background.
* Foreground: ít particle hơn nhưng streak dài, sáng và nhanh.
* Midground: density cao nhất, kích thước trung bình.
* Background: nhỏ, mờ, nhẹ và bị atmospheric fog.
* Mỗi particle phải có depth-dependent speed, length, width, opacity và blur.

2. NATURAL MOTION

* Không dùng chuyển động kiểu `y += constantSpeed` và `x -= 1`.
* Mỗi particle có velocity.
* Có gravity.
* Có wind vector.
* Wind phải có variation theo thời gian bằng noise hoặc smooth turbulence.
* Các particle không được rơi thành các đường song song giống nhau.
* Có slight variation về angle, speed và acceleration.

3. RAIN STREAK SHADER

* Không render mỗi drop như một triangle màu phẳng.
* Dùng camera-facing quad/instanced geometry hoặc tương đương.
* Shader tạo gradient alpha dọc streak.
* Có bright head + fading tail.
* Có motion-stretch phụ thuộc velocity.
* Foreground streak rõ hơn background.
* Có slight randomness về brightness.
* Tránh màu xanh đồng nhất cho toàn bộ rain.

4. ATMOSPHERE
   Tạo nhiều layer:

* blue-gray sky/background gradient
* subtle cloud/mist layer
* rain
* distant fog
* optional distant silhouettes
* foreground rain

Rain phải hòa vào environment thay vì nổi như overlay.

5. FOG / DEPTH

* Dùng depth-dependent opacity.
* Background rain phải fade vào fog.
* Foreground rain phải sắc nét hơn.
* Không dùng fog quá mạnh đến mức thành màn sương trắng.

6. RAIN DENSITY

* Target khoảng 1500–3000 particles tổng cộng nếu performance cho phép.
* Ưu tiên instanced rendering.
* Không tạo hàng nghìn React components.
* Không recreate BufferGeometry/Material mỗi frame.
* Animation/update nên dùng requestAnimationFrame hoặc R3F `useFrame`.
* Nếu có thể, đưa movement calculation vào shader để giảm CPU work.

7. WIND

* Có một global wind direction.
* Wind strength thay đổi chậm theo thời gian.
* Có local turbulence nhẹ.
* Rain angle phải thay đổi theo wind.
* Không để toàn bộ rain có cùng angle.

8. GROUND / WINDOW SPLASH
   Nếu scene có ground:

* Khi rain chạm ground, tạo subtle circular splash/ripple.
* Ripple có lifetime ngắn.
* Radius tăng dần.
* Opacity giảm dần.
* Không cần full physics simulation.

Nếu scene là rainy window:

* Ưu tiên glass surface + raindrop streaks.
* Có thể dùng procedural normal/distortion để tạo subtle refraction.
* Background phía sau glass phải bị distortion rất nhẹ quanh droplets.
* Không làm distortion quá mạnh.

9. LIGHTING
   Theme:

* cold blue outdoor environment
* subtle warm indoor light
* rain catches small highlights
* optional extremely rare lightning flash

Lightning phải rất hiếm và mềm, không làm trang web thành horror effect.

10. VISUAL STYLE
    Mục tiêu:
    "cozy rainy blue personal homepage"

Không muốn:

* cyberpunk
* neon rain
* Matrix rain
* generic game rain
* quá nhiều bloom
* quá nhiều particle
* cartoon rain
* perfectly parallel streaks

Muốn:

* rainy afternoon
* blue nostalgia
* early-web / Windows XP blue atmosphere
* soft fog
* subtle depth
* cozy room feeling
* believable rain motion

11. PERFORMANCE

* WebGL/WebGL2.
* Prefer instancedMesh hoặc GPU-friendly particle buffer.
* Reuse buffers/materials.
* Không allocate objects trong animation loop.
* Handle resize và DPR correctly.
* Respect `prefers-reduced-motion`.
* Pause/reduce animation when tab is hidden nếu hợp lý.
* Giữ background nhẹ vì phía trên còn có toàn bộ Notion-like UI.

12. IMPLEMENTATION PHASES

Phase 1:

* depth layers
* velocity
* gravity
* wind
* shader gradient

Phase 2:

* fog
* atmospheric background
* distant rain
* motion variation

Phase 3:

* splash/ripple hoặc rainy-window glass
* subtle refraction/distortion

Phase 4:

* lighting
* optional rare lightning
* performance optimization

Quan trọng:
Đừng chỉ tăng số lượng particle của implementation hiện tại. Hãy thay đổi mô hình rendering từ "flat animated streaks" thành "depth-aware atmospheric rain system".

Sau khi implement, hãy tự đánh giá bằng checklist:

* Có còn cảm giác particle giả không?
* Các streak có bị song song quá không?
* Có cảm giác foreground/background không?
* Rain có hòa vào fog không?
* Có cảm giác đang nhìn một môi trường thật thay vì overlay không?
* Có giữ được blue nostalgia/cozy aesthetic không?
* FPS có ổn định không?

Nếu một hiệu ứng không cải thiện realism mà chỉ tăng visual noise, bỏ nó.
