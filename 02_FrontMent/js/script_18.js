// Menggunakan IIFE (Immediately Invoked Function Expression) untuk enkapsulasi
// dan menghindari polusi scope global.
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const appContainer = document.querySelector(".container");
    let allNotifications = []; // State untuk menyimpan data notifikasi

    /**
     * Menghitung dan memformat selisih waktu dari sekarang.
     * @param {string} dateString - String tanggal dalam format ISO.
     * @returns {string} - String yang diformat seperti "1 min ago".
     */
    const formatTimeAgo = (dateString) => {
      const now = new Date();
      const past = new Date(dateString);
      const secondsPast = Math.floor((now - past) / 1000);

      const timeIntervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        min: 60,
        second: 1,
      };

      for (const unit in timeIntervals) {
        const interval = secondsPast / timeIntervals[unit];
        if (interval >= 1) {
          const value = Math.floor(interval);
          return `${value} ${unit}${value > 1 ? "s" : ""} ago`;
        }
      }
      return "just now";
    };

    /**
     * Membuat elemen DOM dengan properti yang ditentukan.
     * @param {string} tag - Tag HTML dari elemen (e.g., 'div', 'p').
     * @param {object} [props={}] - Properti untuk elemen (e.g., className, textContent).
     * @param {Array<HTMLElement>} [children=[]] - Array dari elemen anak.
     * @returns {HTMLElement} - Elemen yang telah dibuat.
     */
    const createElement = (tag, props = {}, children = []) => {
      const el = document.createElement(tag);

      // Menangani 'dataset' secara terpisah karena propertinya read-only
      if (props.dataset) {
        Object.keys(props.dataset).forEach((key) => {
          el.dataset[key] = props.dataset[key];
        });
        // Hapus 'dataset' dari props agar tidak diproses oleh Object.assign
        delete props.dataset;
      }

      Object.assign(el, props);
      children.forEach((child) => child && el.appendChild(child));
      return el;
    };

    /**
     * Membuat dan merender seluruh UI notifikasi.
     */
    const renderUI = () => {
      appContainer.innerHTML = ""; // Membersihkan kontainer sebelum render ulang

      const unreadCount = allNotifications.filter((n) => !n.is_read).length;

      // Membuat Header
      const header = createElement("header", { className: "header" }, [
        createElement("div", { className: "header__title" }, [
          createElement("h1", {
            className: "header__title__text",
            textContent: "Notifications",
          }),
          createElement("div", { className: "header__title__box-count" }, [
            createElement("span", {
              className: "header__title__box-count__value",
              textContent: unreadCount,
            }),
          ]),
        ]),
        createElement("button", {
          className: "header__button-mark-read",
          textContent: "Mark all as read",
        }),
      ]);

      // Membuat Konten Utama (Daftar Notifikasi)
      const content = createElement("main", { className: "content" });
      allNotifications.forEach((data, index) => {
        const notificationEl = createNotificationElement(data, index);
        content.appendChild(notificationEl);
      });

      appContainer.append(header, content);
    };

    /**
     * Membuat satu elemen notifikasi.
     * @param {object} data - Objek data untuk satu notifikasi.
     * @param {number} index - Indeks notifikasi dalam array.
     * @returns {HTMLElement} - Elemen notifikasi.
     */
    const createNotificationElement = (data, index) => {
      const isUnread = !data.is_read;

      // --- Bagian Teks ---
      const texts = createElement(
        "div",
        { className: "content__notification__texts" },
        [
          createElement("a", {
            href: "#",
            className: "content__notification__texts__actor-name",
            textContent: data.actor_name,
          }),
          createElement("span", {
            className: "content__notification__texts__message",
            textContent: ` ${data.message} `,
          }),
          data.post &&
            createElement("a", {
              href: "#",
              className: "content__notification__texts__post",
              textContent: ` ${data.post}`,
            }),
          data.group &&
            createElement("a", {
              href: "#",
              className: "content__notification__texts__group",
              textContent: ` ${data.group}`,
            }),
          isUnread &&
            createElement("span", {
              className: "content__notification__texts__unread-icon",
            }),
        ]
      );

      // --- Bagian Referensi (Gambar/File) ---
      let references = null;
      if (data.reference_images || data.reference_files) {
        const imageContainer = createElement("div", {
          className: "content__notification__references__images",
        });
        const fileContainer = createElement("div", {
          className: "content__notification__references__files",
        });

        // Logika untuk Reference Images
        if (data.reference_images && data.reference_images.length > 0) {
          if (data.reference_images.length > 2) {
            imageContainer.append(
              createElement(
                "a",
                {
                  href: "#",
                  className: "content__notification__references__frame",
                },
                [
                  createElement("img", {
                    src: data.reference_images[0],
                    alt: "reference image",
                  }),
                ]
              ),
              createElement("a", {
                href: "#",
                className:
                  "content__notification__references__frame content__notification__references__more",
                textContent: `+${data.reference_images.length - 1}`,
              })
            );
          } else {
            data.reference_images.forEach((src) => {
              imageContainer.appendChild(
                createElement(
                  "a",
                  {
                    href: "#",
                    className: "content__notification__references__frame",
                  },
                  [createElement("img", { src, alt: "reference image" })]
                )
              );
            });
          }
        }

        // Logika untuk Reference Files
        if (data.reference_files && data.reference_files.length > 0) {
          if (data.reference_files.length > 2) {
            fileContainer.append(
              createElement(
                "a",
                {
                  href: "#",
                  className:
                    "content__notification__references__frame content__notification__references__file-icon",
                },
                [createElement("i", { className: data.reference_files[0] })]
              ),
              createElement("a", {
                href: "#",
                className:
                  "content__notification__references__frame content__notification__references__more",
                textContent: `+${data.reference_files.length - 1}`,
              })
            );
          } else {
            data.reference_files.forEach((iconClass) => {
              fileContainer.appendChild(
                createElement(
                  "a",
                  {
                    href: "#",
                    className:
                      "content__notification__references__frame content__notification__references__file-icon",
                  },
                  [createElement("i", { className: iconClass })]
                )
              );
            });
          }
        }

        references = createElement(
          "div",
          { className: "content__notification__references" },
          [imageContainer, fileContainer]
        );
      }

      // --- Bagian Komentar ---
      const commentBox = data.comment
        ? createElement("div", {
            className: "content__notification__comment-box",
            textContent: data.comment,
          })
        : null;

      // --- Gabungkan Semua Bagian ---
      const notification = createElement(
        "div",
        {
          className: `content__notification ${isUnread ? "unread" : ""}`,
          dataset: { index }, // Gunakan data-attribute untuk identifikasi
        },
        [
          createElement(
            "div",
            { className: "content__notification__profil-image" },
            [
              createElement("img", {
                src: data.profil_image,
                alt: data.actor_name,
              }),
            ]
          ),
          texts,
          createElement("div", {
            className: "content__notification__datetime",
            textContent: formatTimeAgo(data.datetime),
          }),
          references,
          commentBox,
        ]
      );

      return notification;
    };

    /**
     * Mengatur semua event listener untuk aplikasi.
     * Menggunakan event delegation untuk efisiensi.
     */
    const setupEventListeners = () => {
      appContainer.addEventListener("click", (e) => {
        // Menangani klik tombol "Mark all as read"
        if (e.target.matches(".header__button-mark-read")) {
          allNotifications.forEach((n) => (n.is_read = true));
          renderUI(); // Render ulang UI setelah state berubah
          return;
        }

        // Menangani klik pada notifikasi yang belum dibaca
        const notification = e.target.closest(".content__notification.unread");
        if (notification) {
          const index = parseInt(notification.dataset.index, 10);
          if (!isNaN(index) && allNotifications[index]) {
            allNotifications[index].is_read = true;
            renderUI(); // Render ulang UI setelah state berubah
          }
        }
      });
    };

    /**
     * Fungsi inisialisasi untuk memuat data dan memulai aplikasi.
     */
    const initializeApp = async () => {
      try {
        const response = await fetch("./js/data_18.json");
        if (!response.ok) {
          throw new Error(`Gagal memuat data: ${response.statusText}`);
        }
        allNotifications = await response.json();
        renderUI();
        setupEventListeners();
      } catch (error) {
        console.error("Terjadi kesalahan saat inisialisasi aplikasi:", error);
        appContainer.innerHTML = `<p style="color: red; text-align: center;">Gagal memuat notifikasi. Silakan coba lagi nanti.</p>`;
      }
    };

    // Memulai aplikasi
    initializeApp();
  });
})();
