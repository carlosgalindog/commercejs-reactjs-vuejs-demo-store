import { h } from 'panel';

export default () => {
  return h('svg', {
    attrs: {
      width: "100%",
      height: "100%",
      viewBox: "0 0 211 17",
   },
  },
    h('path', {
      attrs: {
        d: "M9.07471 12.083C9.07471 11.502 8.86963 11.0576 8.45947 10.75C8.04932 10.4355 7.31104 10.1074 6.24463 9.76562C5.17822 9.41699 4.33398 9.0752 3.71191 8.74023C2.0166 7.82422 1.16895 6.59033 1.16895 5.03857C1.16895 4.23193 1.39453 3.51416 1.8457 2.88525C2.30371 2.24951 2.95654 1.75391 3.8042 1.39844C4.65869 1.04297 5.61572 0.865234 6.67529 0.865234C7.7417 0.865234 8.69189 1.06006 9.52588 1.44971C10.3599 1.83252 11.0059 2.37598 11.4639 3.08008C11.9287 3.78418 12.1611 4.58398 12.1611 5.47949H9.08496C9.08496 4.7959 8.86963 4.26611 8.43896 3.89014C8.0083 3.50732 7.40332 3.31592 6.62402 3.31592C5.87207 3.31592 5.2876 3.47656 4.87061 3.79785C4.45361 4.1123 4.24512 4.5293 4.24512 5.04883C4.24512 5.53418 4.48779 5.94092 4.97314 6.26904C5.46533 6.59717 6.18652 6.90479 7.13672 7.19189C8.88672 7.71826 10.1616 8.37109 10.9614 9.15039C11.7612 9.92969 12.1611 10.9004 12.1611 12.0625C12.1611 13.3545 11.6724 14.3696 10.6948 15.1079C9.71729 15.8394 8.40137 16.2051 6.74707 16.2051C5.59863 16.2051 4.55273 15.9966 3.60938 15.5796C2.66602 15.1558 1.94482 14.5781 1.4458 13.8467C0.953613 13.1152 0.70752 12.2676 0.70752 11.3037H3.79395C3.79395 12.9512 4.77832 13.7749 6.74707 13.7749C7.47852 13.7749 8.04932 13.6279 8.45947 13.334C8.86963 13.0332 9.07471 12.6162 9.07471 12.083ZM32.8166 8.87354C32.8166 10.3433 32.5568 11.6318 32.0373 12.7393C31.5178 13.8467 30.7727 14.7012 29.802 15.3027C28.8381 15.9043 27.7307 16.2051 26.4797 16.2051C25.2424 16.2051 24.1384 15.9077 23.1677 15.313C22.197 14.7183 21.445 13.8706 20.9118 12.77C20.3786 11.6626 20.1086 10.3911 20.1018 8.95557V8.21729C20.1018 6.74756 20.3649 5.45557 20.8913 4.34131C21.4245 3.22021 22.173 2.3623 23.1369 1.76758C24.1076 1.16602 25.215 0.865234 26.4592 0.865234C27.7033 0.865234 28.8073 1.16602 29.7712 1.76758C30.7419 2.3623 31.4904 3.22021 32.0168 4.34131C32.55 5.45557 32.8166 6.74414 32.8166 8.20703V8.87354ZM29.6994 8.19678C29.6994 6.63135 29.4191 5.44189 28.8586 4.62842C28.298 3.81494 27.4982 3.4082 26.4592 3.4082C25.427 3.4082 24.6306 3.81152 24.07 4.61816C23.5095 5.41797 23.2258 6.59375 23.2189 8.14551V8.87354C23.2189 10.3979 23.4992 11.5806 24.0598 12.4214C24.6203 13.2622 25.427 13.6826 26.4797 13.6826C27.5119 13.6826 28.3049 13.2793 28.8586 12.4727C29.4123 11.6592 29.6926 10.4766 29.6994 8.9248V8.19678ZM53.0722 11.0269C52.956 12.6333 52.3612 13.8979 51.288 14.8208C50.2216 15.7437 48.8134 16.2051 47.0634 16.2051C45.1493 16.2051 43.642 15.5625 42.5414 14.2773C41.4477 12.9854 40.9008 11.2148 40.9008 8.96582V8.05322C40.9008 6.61768 41.1537 5.35303 41.6596 4.25928C42.1654 3.16553 42.8866 2.32813 43.8231 1.74707C44.7665 1.15918 45.8603 0.865234 47.1044 0.865234C48.827 0.865234 50.2147 1.32666 51.2675 2.24951C52.3202 3.17236 52.9286 4.46777 53.0927 6.13574H50.0165C49.9413 5.17188 49.6713 4.47461 49.2064 4.04395C48.7484 3.60645 48.0478 3.3877 47.1044 3.3877C46.079 3.3877 45.31 3.75684 44.7973 4.49512C44.2914 5.22656 44.0316 6.36475 44.018 7.90967V9.0376C44.018 10.6509 44.2606 11.8301 44.746 12.5752C45.2382 13.3203 46.0106 13.6929 47.0634 13.6929C48.0136 13.6929 48.7211 13.4775 49.1859 13.0469C49.6576 12.6094 49.9276 11.936 49.996 11.0269H53.0722ZM66.068 10.0117L64.4684 11.7344V16H61.3922V1.07031H64.4684V7.83789L65.8219 5.98193L69.6261 1.07031H73.4098L68.1085 7.70459L73.5636 16H69.9029L66.068 10.0117ZM88.764 12.083C88.764 11.502 88.5589 11.0576 88.1487 10.75C87.7386 10.4355 87.0003 10.1074 85.9339 9.76562C84.8675 9.41699 84.0232 9.0752 83.4012 8.74023C81.7059 7.82422 80.8582 6.59033 80.8582 5.03857C80.8582 4.23193 81.0838 3.51416 81.535 2.88525C81.993 2.24951 82.6458 1.75391 83.4935 1.39844C84.3479 1.04297 85.305 0.865234 86.3645 0.865234C87.431 0.865234 88.3811 1.06006 89.2151 1.44971C90.0491 1.83252 90.6951 2.37598 91.1531 3.08008C91.618 3.78418 91.8504 4.58398 91.8504 5.47949H88.7742C88.7742 4.7959 88.5589 4.26611 88.1282 3.89014C87.6976 3.50732 87.0926 3.31592 86.3133 3.31592C85.5613 3.31592 84.9769 3.47656 84.5599 3.79785C84.1429 4.1123 83.9344 4.5293 83.9344 5.04883C83.9344 5.53418 84.177 5.94092 84.6624 6.26904C85.1546 6.59717 85.8758 6.90479 86.826 7.19189C88.576 7.71826 89.8509 8.37109 90.6507 9.15039C91.4505 9.92969 91.8504 10.9004 91.8504 12.0625C91.8504 13.3545 91.3616 14.3696 90.3841 15.1079C89.4065 15.8394 88.0906 16.2051 86.4363 16.2051C85.2879 16.2051 84.242 15.9966 83.2986 15.5796C82.3553 15.1558 81.6341 14.5781 81.1351 13.8467C80.6429 13.1152 80.3968 12.2676 80.3968 11.3037H83.4832C83.4832 12.9512 84.4676 13.7749 86.4363 13.7749C87.1678 13.7749 87.7386 13.6279 88.1487 13.334C88.5589 13.0332 88.764 12.6162 88.764 12.083ZM99.6372 11.9805C99.6372 11.29 99.8286 10.6509 100.211 10.063C100.601 9.4751 101.312 8.82227 102.344 8.10449C101.9 7.50977 101.551 6.95264 101.298 6.43311C101.045 5.90674 100.919 5.35986 100.919 4.79248C100.919 3.63037 101.285 2.68701 102.016 1.9624C102.754 1.23096 103.746 0.865234 104.99 0.865234C106.104 0.865234 107.017 1.19678 107.728 1.85986C108.445 2.52295 108.804 3.3501 108.804 4.34131C108.804 5.53076 108.203 6.58008 107 7.48926L105.851 8.31982L108.425 11.314C108.828 10.521 109.03 9.646 109.03 8.68896H111.552C111.552 10.6304 111.104 12.2026 110.209 13.4058L112.444 16H109.081L108.312 15.1182C107.211 15.8428 105.947 16.2051 104.518 16.2051C103.042 16.2051 101.859 15.8188 100.97 15.0464C100.082 14.2671 99.6372 13.2451 99.6372 11.9805ZM104.662 13.8262C105.373 13.8262 106.046 13.6279 106.682 13.2314L103.739 9.82715L103.523 9.98096C102.915 10.5005 102.611 11.1123 102.611 11.8164C102.611 12.4111 102.799 12.8965 103.175 13.2725C103.558 13.6416 104.053 13.8262 104.662 13.8262ZM103.575 4.75146C103.575 5.26416 103.875 5.91016 104.477 6.68945L105.267 6.1665C105.67 5.90674 105.947 5.65381 106.097 5.40771C106.254 5.16162 106.333 4.86768 106.333 4.52588C106.333 4.18408 106.207 3.88672 105.954 3.63379C105.701 3.38086 105.376 3.25439 104.979 3.25439C104.556 3.25439 104.214 3.39111 103.954 3.66455C103.701 3.93799 103.575 4.30029 103.575 4.75146ZM128.065 12.083C128.065 11.502 127.86 11.0576 127.45 10.75C127.04 10.4355 126.301 10.1074 125.235 9.76562C124.169 9.41699 123.324 9.0752 122.702 8.74023C121.007 7.82422 120.159 6.59033 120.159 5.03857C120.159 4.23193 120.385 3.51416 120.836 2.88525C121.294 2.24951 121.947 1.75391 122.795 1.39844C123.649 1.04297 124.606 0.865234 125.666 0.865234C126.732 0.865234 127.682 1.06006 128.516 1.44971C129.35 1.83252 129.996 2.37598 130.454 3.08008C130.919 3.78418 131.152 4.58398 131.152 5.47949H128.075C128.075 4.7959 127.86 4.26611 127.429 3.89014C126.999 3.50732 126.394 3.31592 125.614 3.31592C124.863 3.31592 124.278 3.47656 123.861 3.79785C123.444 4.1123 123.236 4.5293 123.236 5.04883C123.236 5.53418 123.478 5.94092 123.964 6.26904C124.456 6.59717 125.177 6.90479 126.127 7.19189C127.877 7.71826 129.152 8.37109 129.952 9.15039C130.752 9.92969 131.152 10.9004 131.152 12.0625C131.152 13.3545 130.663 14.3696 129.685 15.1079C128.708 15.8394 127.392 16.2051 125.738 16.2051C124.589 16.2051 123.543 15.9966 122.6 15.5796C121.656 15.1558 120.935 14.5781 120.436 13.8467C119.944 13.1152 119.698 12.2676 119.698 11.3037H122.784C122.784 12.9512 123.769 13.7749 125.738 13.7749C126.469 13.7749 127.04 13.6279 127.45 13.334C127.86 13.0332 128.065 12.6162 128.065 12.083ZM151.694 16H148.618V9.60156H142.62V16H139.543V1.07031H142.62V7.12012H148.618V1.07031H151.694V16ZM172.955 8.87354C172.955 10.3433 172.695 11.6318 172.175 12.7393C171.656 13.8467 170.911 14.7012 169.94 15.3027C168.976 15.9043 167.869 16.2051 166.618 16.2051C165.38 16.2051 164.276 15.9077 163.306 15.313C162.335 14.7183 161.583 13.8706 161.05 12.77C160.517 11.6626 160.247 10.3911 160.24 8.95557V8.21729C160.24 6.74756 160.503 5.45557 161.029 4.34131C161.563 3.22021 162.311 2.3623 163.275 1.76758C164.246 1.16602 165.353 0.865234 166.597 0.865234C167.841 0.865234 168.945 1.16602 169.909 1.76758C170.88 2.3623 171.629 3.22021 172.155 4.34131C172.688 5.45557 172.955 6.74414 172.955 8.20703V8.87354ZM169.837 8.19678C169.837 6.63135 169.557 5.44189 168.997 4.62842C168.436 3.81494 167.636 3.4082 166.597 3.4082C165.565 3.4082 164.769 3.81152 164.208 4.61816C163.648 5.41797 163.364 6.59375 163.357 8.14551V8.87354C163.357 10.3979 163.637 11.5806 164.198 12.4214C164.758 13.2622 165.565 13.6826 166.618 13.6826C167.65 13.6826 168.443 13.2793 168.997 12.4727C169.55 11.6592 169.831 10.4766 169.837 8.9248V8.19678ZM190.472 9.52979H184.566V13.5288H191.498V16H181.49V1.07031H191.477V3.56201H184.566V7.12012H190.472V9.52979ZM207.344 12.083C207.344 11.502 207.139 11.0576 206.729 10.75C206.319 10.4355 205.581 10.1074 204.514 9.76562C203.448 9.41699 202.604 9.0752 201.981 8.74023C200.286 7.82422 199.438 6.59033 199.438 5.03857C199.438 4.23193 199.664 3.51416 200.115 2.88525C200.573 2.24951 201.226 1.75391 202.074 1.39844C202.928 1.04297 203.885 0.865234 204.945 0.865234C206.011 0.865234 206.961 1.06006 207.795 1.44971C208.629 1.83252 209.275 2.37598 209.733 3.08008C210.198 3.78418 210.431 4.58398 210.431 5.47949H207.354C207.354 4.7959 207.139 4.26611 206.708 3.89014C206.278 3.50732 205.673 3.31592 204.894 3.31592C204.142 3.31592 203.557 3.47656 203.14 3.79785C202.723 4.1123 202.515 4.5293 202.515 5.04883C202.515 5.53418 202.757 5.94092 203.243 6.26904C203.735 6.59717 204.456 6.90479 205.406 7.19189C207.156 7.71826 208.431 8.37109 209.231 9.15039C210.031 9.92969 210.431 10.9004 210.431 12.0625C210.431 13.3545 209.942 14.3696 208.964 15.1079C207.987 15.8394 206.671 16.2051 205.017 16.2051C203.868 16.2051 202.822 15.9966 201.879 15.5796C200.936 15.1558 200.214 14.5781 199.715 13.8467C199.223 13.1152 198.977 12.2676 198.977 11.3037H202.063C202.063 12.9512 203.048 13.7749 205.017 13.7749C205.748 13.7749 206.319 13.6279 206.729 13.334C207.139 13.0332 207.344 12.6162 207.344 12.083Z",
        fill: "#F4F4F4"
      }
    })
  )
}