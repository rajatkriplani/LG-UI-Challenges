const progressBar = document.getElementById('progressBar');
const progressSteps = document.querySelectorAll('.progress-step');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentStep = 1;
const totalSteps = progressSteps.length;

function updateProgressBar() {
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
  progressBar.style.width = `${progressPercentage}%`;

  progressSteps.forEach((step, index) => {
    if (index < currentStep) {
      step.classList.add('completed');
      step.classList.remove('active');
    } else {
      step.classList.remove('completed', 'active');
    }
  });

  if (currentStep > 0) {
    progressSteps[currentStep - 1].classList.add('active');
  }

  prevButton.disabled = currentStep === 1;
  nextButton.disabled = currentStep === totalSteps;
}

nextButton.addEventListener('click', () => {
  if (currentStep < totalSteps) {
    currentStep++;
    updateProgressBar();
    playLevelUpSound();
  }
});

prevButton.addEventListener('click', () => {
  if (currentStep > 1) {
    currentStep--;
    updateProgressBar();
  }
});

updateProgressBar();
