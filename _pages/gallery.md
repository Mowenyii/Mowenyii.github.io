---
permalink: /gallery/
title: "Conference Gallery"
excerpt: "Photos from conferences and academic events"
author_profile: true
---

<link rel="stylesheet" href="/assets/css/gallery.css">

<span class='anchor' id='gallery'></span>

# 📸 Conference Gallery

Here are some photos from conferences and academic events I've attended:

<div class="photo-gallery">
  <div class="gallery-container">
    <div class="gallery-slider">
      <!-- CVPR 2024 会议照片 -->
      <div class="gallery-item">
        <img src="images/cvpr_2024.jpg" alt="CVPR 2024 Conference" />
        <div class="gallery-caption">
          <h3>CVPR 2024</h3>
          <p>Seattle, Washington - CVPR 2024</p>
        </div>
      </div>
      <!-- ICCV 2025 会议照片 -->
      <div class="gallery-item">
        <img src="images/iccv_2025.jpg" alt="ICCV 2025 Conference" />
        <div class="gallery-caption">
          <h3>ICCV 2025</h3>
          <p>Honolulu, Hawaiʻi - ICCV 2025</p>
        </div>
      </div>
      
      <!-- 个人照片 -->
      <div class="gallery-item">
        <img src="images/me.jpg" alt="Personal Photo" />
        <div class="gallery-caption">
          <h3>学术研究</h3>
          <p>专注于生成模型和多模态学习研究</p>
        </div>
      </div>
    </div>
    
    <!-- 导航按钮 -->
    <button class="gallery-nav prev" onclick="changeSlide(-1)">❮</button>
    <button class="gallery-nav next" onclick="changeSlide(1)">❯</button>
    
    <!-- 指示器 -->
    <div class="gallery-indicators">
      <span class="indicator active" onclick="currentSlide(1)"></span>
      <span class="indicator" onclick="currentSlide(2)"></span>
      <span class="indicator" onclick="currentSlide(3)"></span>
      <span class="indicator" onclick="currentSlide(4)"></span>
      <span class="indicator" onclick="currentSlide(5)"></span>
    </div>
  </div>
</div>


<script src="/assets/js/gallery.js"></script>
