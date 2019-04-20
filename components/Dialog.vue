<template>
  <transition name="modal">
    <div>
      <div class="modal-mask" @click="$emit('close')" />
      <div class="modal-wrapper">
        <div class="modal">
          <div class="modal__content">
            <slot name="content">
              content
            </slot>
          </div>
          <button class="modal__close" @click="$emit('close')">
            <slot name="close">
              close
            </slot>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9997;
  top: 0;
  left: 0;
  width: 100%;
  height: 130%;
  background-color: rgba(0, 0, 0, .5);
  transform: translateZ(999px);
}

.modal-wrapper {
  position: fixed;
  z-index: 9998;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 999px);
}

.modal {
  width: 300px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
}

.modal-leave-active {
  transition: .3s ease;
  opacity: 0;
  .modal {
    transition: .3s ease;
    transform: scale(1.1);
  }
}
</style>
