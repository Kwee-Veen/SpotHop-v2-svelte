<script lang="ts">

import type { Spot } from "$lib/types/spot-types";

export let spot: Spot;

</script>

<section class="content box">
    <div class="box has-background-success-light">
        <div class="columns is-centered">
        <div class="column is-9">
            <div class="box">
            <table>
                <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Coordinates</th>
                </tr>
                <tr>
                <td>
                    {spot.name}
                </td>
                <td>
                    {spot.category}
                </td>
                <td>
                    {spot.latitude}, {spot.longitude}
                </td>
                </tr>
                <tr>
                <td>
                    <b>Description:</b> {spot.description}
                </td>
                </tr>
            </table>
            </div>
            <div class="columns">
            <div class="column is-3">
                <div class="box">
                <b>Edit Spot: </b>
                <!-- <a href="/spot/{spot._id}" class="button"> -->
                    <span class="icon is-small">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="#74C0FC"
                        d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                    </svg>
                    </span>
                <!-- </a> -->
                </div>
            </div>
            <div class="column is-3">
                <div class="box">
                <b>Delete Spot: </b>
                <!-- <a href="/dashboard/{spot._id}/deletespot" class="button"> -->
                    <span class="icon is-small">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="#FF0000"
                        d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                    </svg>
                    </span>
                <!-- </a> -->
                </div>
            </div>
            {#if spot.img}
            <div class="column is-3">
                <div class="box">
                <b>Delete Image: </b>
                <!-- <a href="/spot/{spot._id}/deleteimage" class="button"> -->
                    <span class="icon is-small">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path fill="#ff0000"
                        d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                    </svg>
                    </span>
                <!-- </a> -->
                </div>
            </div>
            {/if}
            </div>
        <!-- {#if !spot.img}
            <div class="box">
            Not yet created, but would be the option to import a new image:
                <SpotImage {spot}/>
            </div>
        {/if} -->
        </div>
        <div class="column is-3">
            {#if spot.img}
            <div class="box">
            <img src="{spot.img}" class="image" alt="uploaded spot">
            </div>
            {/if}
        </div>
        </div>
    </div>
</section>

  