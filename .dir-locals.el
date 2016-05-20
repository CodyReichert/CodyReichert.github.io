((web-mode
  ;; Set web-mode-content-types-alist variable to jave js files treated as jsx
  . (
     (web-mode-enable-auto-quoting . nil)
     (eval . (setq web-mode-content-types-alist '(("jsx"  . ".*\\.js[x]?\\'"))))
     (eval . (flycheck-add-mode 'javascript-eslint 'web-mode))
     (eval . (flycheck-select-checker . 'javascript-eslint))
     (eval . (flycheck-set-checker-executable javascript-eslint "./frontend/node_modules/.bin/eslint"))
     ))
 )
