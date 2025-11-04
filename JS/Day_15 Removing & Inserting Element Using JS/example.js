
    // 🧩 ARRAY INSERTION & REMOVAL

    let arr = [1, 2, 3];
    console.log("Initial array:", arr);

    // Insert elements
    arr.push(4);              // Add at end
    arr.unshift(0);           // Add at beginning
    arr.splice(2, 0, 99);     // Insert at index 2
    arr = arr.concat([5, 6]); // Merge another array
    arr[3] = "🍎";            // Replace value directly

    // Remove elements
    arr.pop();                // Remove last
    arr.shift();              // Remove first
    arr.splice(1, 1);         // Remove one element at index 1
    arr = arr.filter(x => x !== 99); // Remove by condition
    delete arr[2];            // Delete (leaves undefined)

    document.getElementById("arrayOutput").textContent =
      "Final Array: " + JSON.stringify(arr);

    console.log("Final array:", arr);


    // 🧱 DOM INSERTION & REMOVAL
   
    const container = document.getElementById("container");

    // Create new elements
    const newDiv = document.createElement("div");
    newDiv.className = "item";
    newDiv.textContent = "Appended Item";

    const newDiv2 = document.createElement("div");
    newDiv2.className = "item";
    newDiv2.textContent = "Prepended Item";

    // Insert elements in various ways
    container.appendChild(newDiv);             // Add at end
    container.prepend(newDiv2);                // Add at beginning

    const ref = container.children[1];         // Reference element
    const insertMid = document.createElement("div");
    insertMid.className = "item";
    insertMid.textContent = "Inserted Before Item 2";
    container.insertBefore(insertMid, ref);    // Insert before reference

    // Replace an element
    const replaceEl = document.createElement("div");
    replaceEl.className = "item";
    replaceEl.textContent = "Replaced Item";
    container.replaceChild(replaceEl, container.children[2]);

    // Remove a specific element
    const lastItem = container.lastElementChild;
    container.removeChild(lastItem); // removeChild method

    // Directly remove an element
    container.firstElementChild.remove(); // element.remove()

    // Clear all elements
    setTimeout(() => {
      container.innerHTML = ""; // remove all children
      const clearedMsg = document.createElement("p");
      clearedMsg.textContent = "All elements removed!";
      container.appendChild(clearedMsg);
    }, 3000);