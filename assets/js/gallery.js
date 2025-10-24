// 相册功能JavaScript
let currentSlideIndex = 0;
let slides = [];
let totalSlides = 0;
let autoPlayInterval;

// 初始化相册
function initGallery() {
  slides = document.querySelectorAll('.gallery-item');
  totalSlides = slides.length;
  
  if (totalSlides === 0) return;
  
  showSlide(0);
  startAutoPlay();
  
  // 鼠标悬停时暂停自动播放
  const galleryContainer = document.querySelector('.gallery-container');
  if (galleryContainer) {
    galleryContainer.addEventListener('mouseenter', stopAutoPlay);
    galleryContainer.addEventListener('mouseleave', startAutoPlay);
  }
  
  // 触摸事件支持
  let startX = 0;
  let endX = 0;
  
  galleryContainer.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
  });
  
  galleryContainer.addEventListener('touchend', function(e) {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });
  
  function handleSwipe() {
    const threshold = 50;
    const diff = startX - endX;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        changeSlide(1); // 向左滑动，显示下一张
      } else {
        changeSlide(-1); // 向右滑动，显示上一张
      }
    }
  }
}

function showSlide(index) {
  const slider = document.querySelector('.gallery-slider');
  const indicators = document.querySelectorAll('.indicator');
  
  if (!slider) return;
  
  // 更新滑块位置
  slider.style.transform = `translateX(-${index * 100}%)`;
  
  // 更新指示器
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
  
  currentSlideIndex = index;
}

function changeSlide(direction) {
  if (totalSlides === 0) return;
  
  let newIndex = currentSlideIndex + direction;
  
  if (newIndex >= totalSlides) {
    newIndex = 0;
  } else if (newIndex < 0) {
    newIndex = totalSlides - 1;
  }
  
  showSlide(newIndex);
}

function currentSlide(index) {
  if (totalSlides === 0) return;
  showSlide(index - 1);
}

function startAutoPlay() {
  stopAutoPlay(); // 清除之前的定时器
  if (totalSlides > 1) {
    autoPlayInterval = setInterval(() => {
      changeSlide(1);
    }, 4000); // 每4秒切换一次
  }
}

function stopAutoPlay() {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
  }
}

// 键盘导航
function handleKeyNavigation(e) {
  if (e.key === 'ArrowLeft') {
    changeSlide(-1);
  } else if (e.key === 'ArrowRight') {
    changeSlide(1);
  } else if (e.key === 'Escape') {
    stopAutoPlay();
  }
}

// 页面可见性变化时控制自动播放
function handleVisibilityChange() {
  if (document.hidden) {
    stopAutoPlay();
  } else {
    startAutoPlay();
  }
}

// 当页面加载完成时初始化
document.addEventListener('DOMContentLoaded', function() {
  initGallery();
  document.addEventListener('keydown', handleKeyNavigation);
  document.addEventListener('visibilitychange', handleVisibilityChange);
});

// 窗口大小变化时重新计算
window.addEventListener('resize', function() {
  if (totalSlides > 0) {
    showSlide(currentSlideIndex);
  }
});

// 导出函数供HTML调用
window.changeSlide = changeSlide;
window.currentSlide = currentSlide;
