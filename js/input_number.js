
jQuery(($) => {

    // Уменьшаем на 1
    $(document).on("click", ".input-number__minus", function () {
        let total = $(this).next();

        if (total.val() > 1) {
            total.val(+total.val() - 1);
        }
    }

    );

    // Увеличиваем на 1
    $(document).on("click", ".input-number__plus", function () {
        let total = $(this).prev();
        total.val(+total.val() + 1);
    }

    );

    $(document).on("input", ".input-number__input", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, "");
        }
    }

    );
}

);