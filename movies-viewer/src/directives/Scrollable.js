export const InfiniteScroll = {
    inserted(el, binding) {

        if (typeof binding.value != 'object')
            throw 'the directive need object value { offset: Number, onedge: Function }';

        var host = binding.modifiers.root ? window : el;
        var domElement = document.scrollingElement;


        host.scroll_cb = (e) => {
            let scrolled = domElement.scrollTop + (binding.modifiers.root ? domElement.clientHeight : domElement.offsetHeight);
            let left = domElement.scrollHeight - scrolled;
            if (left <= binding.value.offset && binding.value.onedge) {
                binding.value.onedge({
                    left,
                    scrolled,
                    scrollHeight: domElement.scrollHeight,
                    element: domElement
                });
            }
        };

        // https://learn.javascript.ru/metrics
        host.addEventListener('scroll', host.scroll_cb);
    },
    unbind(el, binding) {
        var domElement = binding.modifiers.root ? document.body : el;
        domElement.removeEventListener('scroll', domElement.scroll_cb);
    }
};